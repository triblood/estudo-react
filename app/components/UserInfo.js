var React = require('react');
var UserRepos = require('./UserRepos');

function UserInfo(props) {
	var UserInfo = props.user ? 
	(
		<div className="row">
			<div className="col-lg-4">
				<img src={props.user.avatar_url} alt="avatar" width="140" height="140" className="img-circle" />
				<h2>{props.user.login}</h2>
				<p>{props.user.name}</p>
				<p>Followers: {props.user.followers} / Following: {props.user.following}</p>
				<p><a href={props.user.html_url} className="btn btn-default">Ver detalhes</a></p>
			</div>
			<div className="col-lg-8">
				<UserRepos repos={props.repos}/>
			</div>
		</div>
	) : null;

	return UserInfo;

}

UserInfo.propTypes = {
	user: React.PropTypes.object,
	repos: React.PropTypes.array,
}

module.exports = UserInfo;