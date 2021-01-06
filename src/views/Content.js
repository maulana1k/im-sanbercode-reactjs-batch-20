import React, {useContext} from 'react'

import {Route, Switch,Redirect} from 'react-router-dom'
import {Breadcrumb, Layout} from 'antd'


import SignIn from '../pages/user/SignIn'
import SignUp from '../pages/user/SignUp'
import ResetPassword from '../pages/user/ResetPassword'
import Home from '../pages/Home'
import Movies from '../pages/Movies'
import Games from '../pages/Games'
import GamesLists from '../pages/lists/GamesLists'
import MovieLists from '../pages/lists/MovieLists'
import CreateGame from '../pages/create/CreateGame'
import CreateMovie from '../pages/create/CreateMovie'
import BgContent from '../bg-home.jpg'
import {UserContext} from '../component/UserContext'
import GameDetails from '../component/content/GameDetails'
import MovieDetails from '../component/content/MovieDetails'
import MovieEdit from '../pages/lists/MovieEdit'
import GameEdit from '../pages/lists/GameEdit'

export default function Content ()  {
	const {Content} = Layout
	const [user] = useContext(UserContext)

	const SignRoute = ({user, ...props }) =>
  	user ? <Redirect to="/" /> : <Route {...props} />;
  	const PrivateRoute = ({user, ...props }) => {
	    if (user) {
	      return <Route {...props} />;
	    } else {
	      return <Redirect to="/login" />;
	    }
	  };




	return(<>
		
		<div id="home"  style={{minHeight:'450px',margin:'0 -24px',backgroundImage:`url(${BgContent})`}} >
		<Switch>
			<Route exact path='/'>
				<Home/>		
			</Route>
			<Route exact path='/movies'>
				<Movies/>
			</Route>
			<Route exact path='/games'>
				<Games/>
			</Route>
			<Route path='/games/details/:id'
			component={props => <GameDetails id={props.match.params.id}/>} />
			<Route path='/movies/details/:id' 
			component={props => <MovieDetails id={props.match.params.id}/> } />
			<SignRoute user={user} path='/signin'>
				<SignIn/>
			</SignRoute>
			<SignRoute user={user} path='/signup'>
				<SignUp/>
			</SignRoute>
			<PrivateRoute user={user} path='/resetpassword'>
				<ResetPassword/>
			</PrivateRoute>
			<PrivateRoute user={user} exact path='/lists/movies'>
				<MovieLists/>
			</PrivateRoute>
			<PrivateRoute user={user} exact path='/lists/games'>
				<GamesLists/>
			</PrivateRoute>
			<Route user={user} path='/lists/movies/edit/:id'
			component={props => <MovieEdit id={props.match.params.id}/> } />
			<PrivateRoute user={user} path='/lists/games/edit/:id'
			component={props => <GameEdit id={props.match.params.id}/> } />
			<PrivateRoute user={user} path='/create/movie'>
				<CreateMovie/>
			</PrivateRoute>
			<PrivateRoute user={user} path='/create/game'>
				<CreateGame/>
			</PrivateRoute>
		</Switch>
		</div>
		
	    </>
		)
}