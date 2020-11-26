import React from 'react';
import { server } from '../../config';
const CreateNewProject = (props) => {
	const createProject = () => {
		const url = `${server.apiUrl}/project`;
		const params = {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json'
			},
			credentials: 'include'
		};

		fetch(url, params)
			.then((response) => response.json())
			.then((data) => {
				if (typeof data.err === 'undefined') {
					window.location = `${server.serverUrl}/project/${data.project}`;
				} else {
					alert(`${data.err}\n\n${data.msg}`);
				}
			})
			.catch((error) => console.log(error));
	};

	return (
		<div className={'create-new-project'}>
			<div className={'text-container'}>
				<h1 className={'title'}>Projects</h1>
				<p className={'content'}>진행 중인 프로젝트가 없습니다. 새로운 프로젝트를 추가하세요.</p>
			</div>
			<button onClick={createProject} className={'create-project-button'}>
				Add Project
			</button>
		</div>
	);
};

export default CreateNewProject;
