import React from "react";
import ReactDOM from "react-dom/client";
import "./scss/style.css";
import App from "./App";
import { store } from "./Redux/store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>
    </React.StrictMode>
);
