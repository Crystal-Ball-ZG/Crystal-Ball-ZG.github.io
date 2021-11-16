import { publish } from 'gh-pages';

publish(
	'build', // path to public directory
	{
		branch: 'gh-pages',
		repo: 'https://github.com/Crystal-Ball-ZG/Crystal-Ball-ZG.github.io', // Update to point to your repository
		user: {
			name: 'Tommi Thaumaturge', // update to use your name
			email: 'tommi@niemi.lol' // Update to use your email
		},
		dotfiles: true
	},
	() => {
		console.log('Deploy Complete!');
	}
);
