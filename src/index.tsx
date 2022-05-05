import React, { useEffect, useState } from "react";
import { ThemePicker, StyleProvider, Logo, View, Spinner, Flex } from "vcc-ui";
import { Filter } from "./elements";
import { Slider } from "./components/Slider";
import { useTracker } from "@volvo-cars/tracking";
import { useKeyPress } from "@volvo-cars/react-utils";
import { ICar } from "./typings";

interface IState {
  cars: ICar[];
  filterBody?: string;
  loading: boolean;
  filteredResults: ICar[];
  index: number;
  isMobile: boolean;
}

const defaultState = {
  cars: [],
  filterBody: "",
  loading: true,
  filteredResults: [],
  index: 0,
  isMobile: false
}

export const Cars: React.FC = () => {
  const [state, setState] = useState<IState>(defaultState);

  const { filterBody, cars, loading, filteredResults, index, isMobile } = state;
  const tracker = useTracker();

  // Accesibility
  useKeyPress('Right', () => navigate("forward" ));
  useKeyPress('Left', () =>  navigate("back" ));

  // Check if the viewport is Mobile or not simply by width
  useEffect(() => {
    if (typeof window !== "undefined")
      window.innerWidth <= 500 && 
      !isMobile && 
      setState((prevState) => ({ ...prevState, isMobile: true }));
  }, [isMobile]);

  // Fetch the cars data from the API
  useEffect(() => {
    fetch("/api/cars")
      .then((res) => res.json())
      .then((data) => {
        // set timeout for the Delay not required
        setTimeout(
          () =>
            setState((prevState) => ({
              ...prevState,
              cars: data,
              loading: false,
              filteredResults: data,
            })),
          3000
        );
      })
      .catch((err) => {
        tracker.interaction({
          eventAction: "Error On Load",
          eventLabel: "Cars Gallery",
        });
        alert("Error: " + err);
        setState({
          ...defaultState,
          loading: false,
        });
      });
  }, [tracker]);

  // Filter the cars by body type
  useEffect(() => {
    const filteredResults = filterBody
      ? cars.filter(({ bodyType }) => bodyType === filterBody)
      : cars;
    setState((prevState) => ({ ...prevState, filteredResults, index: 0 }));
  }, [filterBody, cars]);

  // Navigate to the next car
  const navigate = (direction: string, currentIndex?: number) => {
    tracker.interaction({
      eventAction: "Navigate gallery",
      eventLabel: direction || "Mobile",
    });
    let calculatedIndex = index;
    switch (direction) {
      case "back":
        calculatedIndex = index != 0 ? index - 4 : index;
        break;
      case "forward":
        calculatedIndex = index < filteredResults.length - 4 ? index  + 4 : index;
        break;
      default:
        calculatedIndex = currentIndex || 0;
    }
    setState((prevState) => ({ ...prevState, index: calculatedIndex }));
  };

  return (
    <StyleProvider>
      <ThemePicker variant="light">
        <View padding={6}>
          <Logo type="spreadmark" height={32} />
        </View>
        <Filter
          options={[...new Set(cars.map((result: ICar) => result.bodyType))]}
          onSelect={(value: string) => {
            tracker.interaction({
              eventAction: "Filter By Body Type",
              eventLabel: value,
            });
            setState({ ...state, filterBody: value });
          }}
        />
        <hr />
        <br />
        {loading ? (
          <Flex
            extend={{
              padding: 40,
              alignItems: "center",
            }}
          >
            <Spinner size={48} />
          </Flex>
        ) : (
          <Slider index={index} slides={filteredResults} navigate={navigate} isMobile={isMobile}/>
        )}
      </ThemePicker>
    </StyleProvider>
  );
};
