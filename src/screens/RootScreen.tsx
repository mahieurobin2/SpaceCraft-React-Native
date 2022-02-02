import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import FeedScreen from "./FeedScreen";
import Navigator from "../navigation/navigator";


export const RootScreen = () => {
  const queryClient = new QueryClient();
  return (
    // <LoginScreen />
    // <TermsScreen />
    <QueryClientProvider client={queryClient}>
      <Navigator/>
    </QueryClientProvider>
  );
};

