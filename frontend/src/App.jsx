import CountComp from "./components/CountComp";
import TestComponent from "./components/TestComponent";
import Users from "./components/Users";
import TestContextComponent from "./components/TestContextComponent";
import FormTest from "./forms/FormTest";
import RecipesPage from "./pages/RecipesPage";
import CommentsPage from "./pages/CommentsPage";
import { Link, Route, Routes } from "react-router-dom";
import RecipeDetailsPage from "./pages/RecipeDetailsPage";
import NotFoundPage from "./pages/NotFoundPage";
import NestedRoutePage from "./pages/NestedRoutePage";
import NestedPageOne from "./pages/NestedPageOne";
import NestedPageTwo from "./pages/NestedPageTwo";
import ReactHookForm from "./forms/ReactHookForm";
import UseRefHook from "./hooks/UseRefHook";
import ReactQuerydemo from "./pages/ReactQueryDemo";
import ProductList from "./Shopping Cart/pages/ProductList";
import ProductListPage from "./Shopping Cart/pages/ProductList";
import ProductDetailsPage from "./Shopping Cart/pages/ProductDetails";
import CartPage from "./Shopping Cart/pages/Cart";
import LoginPage from "./firbase/pages/LoginPage";
import RegisterPage from "./firbase/pages/RegisterPage";
import PrivateRoutePage from "./firbase/pages/PrivateRoutePage";
import ProfilePage from "./firbase/pages/ProfilePage";
import ManageCounter from "./zustand-state-mgt/CouterApp/ManageCounter";
import CounterValue from "./zustand-state-mgt/CouterApp/CounterValue";
import AuthPage from "./Task Manager/Pages/AuthPage";
import CommonLayout from "./Task Manager/components/CommonLayout";
import TasksPage from "./Task Manager/Pages/TasksPage";
import ScrumBoardPage from "./Task Manager/Pages/ScrumBoardPage";
import ReactHookFormWithZod from "./react-hook-form-tuts/ReactHookForm";

function App() {
  // const name = "Harry";

  // for navigation via button click
  // const navigate = useNavigate();

  return (
    <div>
      {/* <TestComponent name={name} /> */}
      {/* <CountComp /> */}
      {/* <Users /> */}
      {/* <TestContextComponent /> */}
      {/* <FormTest /> */}
      {/* creating differet routes */}
      {/* <h1>React Routing (Header Component) appears on every page </h1> */}

      {/* navigating via button click */}
      {/* <button onClick={() => navigate("recipe-list")}>Recipe List Page</button> */}
      <div>
        {/* alternative mode of navigation */}
        {/* <Link to={"/comments-list"}>
          <button>Comments Page</button>
        </Link> */}
      </div>

      <Routes>
        {/* <Route path="/home" element={<NestedRoutePage />}>
          <Route path="page-one" element={<NestedPageOne />} />
          <Route path="page-two" element={<NestedPageTwo />} />
        </Route>
        <Route path="/recipe-list" element={<RecipesPage />} />
        <Route path="/comments-list" element={<CommentsPage />} /> */}
        {/* dynamic routing with id's, and it must have same path name with an existing path the only difference is the addition of the :id dynamic route path */}
        {/* <Route path="/recipe-list/:id" element={<RecipeDetailsPage />} /> */}
        {/* Not found page using the asterisk modifier */}
        {/* <Route path="*" element={<NotFoundPage />} />
        <Route path="/react-hook-form" element={<ReactHookForm />} />
        <Route path="/use-ref-hook" element={<UseRefHook />} />
        <Route path="/react-query-demo" element={<ReactQuerydemo />} />
        <Route path="/product-list" element={<ProductListPage />} />
        <Route path="/product-details/:id" element={<ProductDetailsPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} /> */}
        {/* <Route
          path="/profile"
          element={
            <PrivateRoutePage>
              {/* meaning the profile page will be a child of the private rote page */}
        {/* <ProfilePage />
            </PrivateRoutePage> */}
        {/* } */}
        {/* /> */}
        <Route path="/hook-form" element={<ReactHookFormWithZod />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/tasks" element={<CommonLayout />}>
          <Route path="list" element={<TasksPage />} />
          <Route path="scrum-board" element={<ScrumBoardPage />} />
        </Route>
      </Routes>
      {/* <h4 style={{ position: "absolute", bottom: "10px" }}>
        Footer Component, appears on every page{" "}
      </h4> */}
      {/* <h1 className="font-extrabold text-6xl text-amber-700 mb-10">
        React with Zustand
      </h1>
      <ManageCounter />
      <CounterValue /> */}
    </div>
  );
}

export default App;
