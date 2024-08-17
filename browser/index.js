import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import axios from 'axios';

import store from './store/index';

import { setMinions } from './store/minions';
import { setSelectedMinion } from './store/selectedMinion';
import { setIdeas } from './store/ideas';
import { setSelectedIdea } from './store/selectedIdea';
import { setWork } from './store/work';
import { setMeetings } from './store/meetings'; 
import { setIdeaEditing, setMinionEditing, resetEditingState } from './store/appState';

import App from './components/App';
import AllMinions from './components/AllMinions';
import Home from './components/Home';
import AllIdeas from './components/AllIdeas';
import Idea from './components/Idea';
import Minion from './components/Minion';

const appEnter = nextRouterState => {
  Promise.all([
    axios.get('http://localhost:4001/api/minions'),
    axios.get('http://localhost:4001/api/ideas'),
    axios.get('http://localhost:4001/api/meetings'),
  ])
  .then(([minionsResponse,ideasResponse, meetingsResponse]) => {
    return [minionsResponse.data, ideasResponse.data, meetingsResponse.data];
  })
  .then(([minions, ideas, meetings]) => {
    store.dispatch(setMinions(minions));
    store.dispatch(setIdeas(ideas));
    store.dispatch(setMeetings(meetings));
  })
  .catch(console.error.bind(console));
}

const singleMinionEnter = nextRouterState => {
  store.dispatch(resetEditingState());
  const id = nextRouterState.params.id;
  axios.get(`http://localhost:4001/api/minions/${id}`)
  .then(res => res.data)
  .then(minion => {
    store.dispatch(setSelectedMinion(minion));
  })
  .catch(console.error.bind(console));

  axios.get(`http://localhost:4001/api/minions/${id}/work`)
  .then(res => res.data)
  .then(work => {
    store.dispatch(setWork(work));
  })
  .catch(console.error.bind(console));
}

const singleIdeaEnter = nextRouterState => {
  const id = nextRouterState.params.id;
  axios.get(`http://localhost:4001/api/ideas/${id}`)
  .then(res => res.data)
  .then(idea => {
    store.dispatch(setSelectedIdea(idea));
  })
  .catch(console.error.bind(console));
}

const newIdeaEnter = () => {
  store.dispatch(setIdeaEditing());
  store.dispatch(setSelectedIdea({
      name: 'New Idea',
      description: '',
      weeklyRevenue: 0,
      numWeeks: 0,
    }
  ))
}

const newMinionEnter = () => {
  store.dispatch(setWork([]));
  store.dispatch(setMinionEditing());
  store.dispatch(setSelectedMinion({
      name: '',
      title: '',
      weaknesses: '',
      salary: 0,
    }
  ));
}

const allIdeasEnter = () => {
  store.dispatch(resetEditingState())
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App} onEnter={appEnter}>
        <IndexRoute component={Home} />
        <Route path="/minions" component={AllMinions} />
        <Route path="/minions/new" onEnter={newMinionEnter} components={Minion} />
        <Route path="/minions/:id" onEnter={singleMinionEnter} components={Minion} />
        <Route path="/ideas" onEnter={allIdeasEnter} components={AllIdeas} />
        <Route path="/ideas/new" onEnter={newIdeaEnter} components={Idea}/>
        <Route path="/ideas/:id" onEnter={singleIdeaEnter} components={Idea} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
