class ProjectInput {
   // dom types
   templateElement: HTMLTemplateElement;
   hostElement: HTMLDivElement;
   element: HTMLFormElement;

   constructor() {
      // below is an example of type casting, the element will not be null(!) as type
      this.templateElement = document.getElementById('project-input')! as HTMLTemplateElement;
      this.hostElement = document.getElementById('app')! as HTMLDivElement;
   
      const importedNode = document.importNode(this.templateElement.content, true);
      this.element = importedNode.firstElementChild as HTMLFormElement;
      this.attach();
   }

   private attach() {
      this.hostElement.insertAdjacentElement('afterbegin', this.element);
   }
}

const prjInput = new ProjectInput();