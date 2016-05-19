import os

from flask import Flask, render_template
from react.conf import settings
from react.render import render_component


app = Flask(__name__)


settings.configure(
    RENDER=True,
    RENDER_URL='http://127.0.0.1:9009/render'
)


TODOS = [
    'Buy groceries',
    'Mow the lawn',
    'Take out the trash',
]


@app.route('/')
def index():
    component = render_component(
        os.path.join(os.getcwd(), 'static', 'TodoList.jsx'),
        props={'todos': TODOS},
        to_static_markup=False
    )

    return render_template('index.html', component=component)


if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port)
