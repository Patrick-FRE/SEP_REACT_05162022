/// Moduler pattern

const TodosAPI = (function () {
    function getTodos() {
        return fetch('https://jsonplaceholder.typicode.com/todos')
            .then((response) => response.json())
    }

    function deleteTodo(id) {
        return fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
            method: 'DELETE',
        });
    }

    function addTodo(newTodo) {
        return fetch('https://jsonplaceholder.typicode.com/todos', {
            method: 'POST',
            body: JSON.stringify(newTodo),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
    }
    return {
        getTodos,
        deleteTodo,
        addTodo
    }
})()


const View = (function () {
    const domSeletors = {
        'todolistHeader': '.todolist__header',
        'todolistContent': '.todolist__content',
        'inputBarSubmit': '.input-bar__submit',
        'inputBarInput': '.input-bar__input'
    }

    function generateHeaderContent(title, submitText) {
        return `<h1 class="todolist__header__title">${title}</h1>
        <div class="input-bar">
            <input class="input-bar__input"/>
            <button class="input-bar__submit">${submitText}</button>
        </div>`
    }


    function generateTodoItem(todo) {
        return `<li id="todo-${todo.id}" class="todolist__content__row ${todo.completed ? 'checked' : ''}">
        <span class="todolist__content__item">${todo.title}</span>
        <button  class="todolist__content__action" >X</button>
    </li>`
    }

    function generateTodoList(todos) {
        return todos.map(todo => generateTodoItem(todo)).join('')
    }

    function renderHeader(title, submitText) {
        const ele = document.querySelector(domSeletors.todolistHeader)
        const tmp = generateHeaderContent(title, submitText)
        render(ele, tmp)
    }

    function renderTodoList(todos) {
        const tmp = generateTodoList(todos);
        const ele = document.querySelector(domSeletors.todolistContent);
        render(ele, tmp)
    }

    function render(element, template) {
        element.innerHTML = template;
    }

    function getTodoIdFromElement(element) {
        if (element?.id?.startsWith('todo')) {
            return +(element.id.substring(5))
        }
        console.warn('element Does not has an id')
        return null;
    }

    function getTodoIdFromParent(childElement) {
        return getTodoIdFromElement(childElement.parentElement);
    }

    function isDeleteButton(element) {
        return element.classList.contains('todolist__content__action')
    }

    function isContentRowOrItem(element) {
        return element.classList.contains('todolist__content__row')
            || element.classList.contains('todolist__content__item')
    }


    return {
        domSeletors,
        generateHeaderContent,
        generateTodoItem,
        generateTodoList,
        renderHeader,
        renderTodoList,
        render,
        getTodoIdFromElement,
        getTodoIdFromParent,
        isDeleteButton,
        isContentRowOrItem
    }
})()

const Model = (function (todoAPI) {
    const headerConifg = {
        title: "My To Do List",
        submitText: "Add",
    }

    return {
        headerConifg,
        todoAPI
    }
})(TodosAPI)


const Controller = (function (view, model) {
    class State {
        constructor() {
            this._todos = [];
        }
        get todos() {
            console.log('get')
            return this._todos;
        }
        set todos(newTodos) {
            console.log('set')
            this._todos = newTodos;
            view.renderTodoList(this._todos);
        }
    }

    let state = new State();


    function addTodoOnView(newTodo) {
        state.todos = [...state.todos, {
            ...newTodo,
        }]
    }
    function deletTodoOnView(id) {
        state.todos = state.todos.filter(todo => todo.id !== id);
    }
    function toggleCompleteTodoOnView(id) {
        state.todos = state.todos.map(todo => {
            if (todo.id === id) {
                return {
                    ...todo,
                    completed: !todo.completed
                }
            }
            return todo;
        });
    }



    function setUpEvent() {
        document.querySelector(view.domSeletors.inputBarSubmit).addEventListener('click', (e) => {
            const inputEle = document.querySelector(view.domSeletors.inputBarInput);
            const newTitle = inputEle.value;
            inputEle.value = ''
            const newTodo = {
                title: newTitle,
                completed: false,
                userId: 1
            }

            model.todoAPI.addTodo(newTodo).then(data => {
                addTodoOnView(data);
            })
        })

        document.querySelector(view.domSeletors.todolistContent).addEventListener('click', (e) => {
            if (view.isDeleteButton(e.target)) {
                const id = view.getTodoIdFromParent(e.target);
                model.todoAPI.deleteTodo(id).then(_ => {
                    deletTodoOnView(id);

                })
            } else if (view.isContentRowOrItem(e.target)) {
                let id = view.getTodoIdFromElement(e.target) ? view.getTodoIdFromElement(e.target) : view.getTodoIdFromParent(e.target)
                toggleCompleteTodoOnView(id)
            }
        })
    }

    function init() {
        // init
        view.renderHeader(model.headerConifg.title,
            model.headerConifg.submitText);
        model.todoAPI.getTodos().then(todosData => {
            //state.todos.push({ title: 'hello', comopelted: false, id: 1 })
            //  state.todos = [{ title: 'hello', comopelted: false, id: 1 }]
            state.todos = todosData;
        })

        // init Event
        setUpEvent()
    }


    return {
        setUpEvent,
        init
    }
})(View, Model)

Controller.init()




