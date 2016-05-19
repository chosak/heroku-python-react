heroku-python-react
===================

Isomorphic React, served by Python, running on Heroku.

Uses the excellent [python-react](https://github.com/markfinger/python-react) library by [@markfinger](https://github.com/markfinger) and [heroku-buildpack-runit](https://github.com/dpiddy/heroku-buildpack-runit) buildpack by [@dpiddy](https://github.com/dpiddy).

See a live demo of this code at https://heroku-python-react.herokuapp.com.

### Installation

First install local Python and Node dependencies:

```sh
mkvirtualenv heroku-python-react
pip install -r requirements.txt
npm install
```

### Deploying to Heroku

First create your new app using the [`heroku`](https://devcenter.heroku.com/articles/heroku-command) command-line tool.

```sh
heroku create
```

This creates a new Heroku app named something like `your-app-12345`.

Then set up the three buildpacks needed to deploy the app:

```sh
heroku buildpacks:add https://github.com/dpiddy/heroku-buildpack-runit.git
heroku buildpacks:add heroku/python
heroku buildpacks:add heroku/nodejs
```

Finally, deploy:

```sh
git push heroku master
```

Open your browser to your new app at, e.g., `https://your-app-12345.herokuapp.com`

### Running locally

First start a local webpack server to compile server-side assets:

```sh
npm run dev
```

Then, in another tab, start a local Heroku process:

```sh
heroku local -f Procfile.web
```

Open your browser to `http://localhost:5000` to see the running app.
