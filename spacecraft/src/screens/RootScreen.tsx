import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import FeedScreen from "./FeedScreen";


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


