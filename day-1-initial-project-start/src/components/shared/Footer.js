import React from 'react';

function Footer() {
	return (
		<div className=" bg-blue-700 p-4 fixed bottom-0 w-full">
			<div className="container mx-auto text-center text-white flex justify-between">
				<p>
					Copyright &copy;{' '}
					{new Date().getFullYear()}
				</p>
				<p>School Project</p>
			</div>
		</div>
	);
}

export default Footer;
