import { Provider } from "react-redux";
import AdminRouter from "./Admin/routes";
import AppRouter from "./Routes/AppRouter";
import AdminStore from "./Admin/store";

function App() {
    return (
        <div className="App">
            <Provider store={AdminStore}>
                <AdminRouter />
            </Provider>
            <AppRouter />
        </div>
    );
}

export default App;
