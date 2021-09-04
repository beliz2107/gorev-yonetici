export class Model {
    user;
    items;

    constructor() {
        this.user = "Beliz";
        this.items = [
            new TodoItem("Spor",true),
            new TodoItem("Kahvaltı",false),
            new TodoItem("Ödev",false),
            new TodoItem("Kitap okuma",false),
        ];
    }
}


export class TodoItem {
    description;
    action;

    constructor(description, action) {
        this.description = description;
        this.action = action;


    }

}