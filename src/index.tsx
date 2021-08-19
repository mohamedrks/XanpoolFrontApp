import ReactDOM from 'react-dom';
import App from './services/Api';
import './index.css';
import { BrowserRouter,Route, Switch } from "react-router-dom";
import BookDetails from './BookDetails';

ReactDOM.render(
  <BrowserRouter>
    <div>
      <App></App>
    </div>
    <Switch>
      <Route path="/bookdetails" component={BookDetails}/>
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
