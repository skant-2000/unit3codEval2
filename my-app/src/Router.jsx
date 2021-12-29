import {Route} from "react-router-dom"

export const Router = () => {
    return (
        <div>
            <Route exact path="/">Home</Route>
            <Route exact path="/cart">Cart</Route>
        </div>
    )
}