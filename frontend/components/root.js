import React from "react";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";
import App from "./App";
import ScrollToTop from './ScrollToTop';

export default ({ store }) => (
	<Provider store={store}>
		<HashRouter>
			<ScrollToTop />
			<App />
		</HashRouter>
	</Provider>
);
