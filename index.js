class Question {
  constructor(text, choices){
    this.text = text;
    this.choices = choices.split(',').map( choice => choice.trim() );
    this.container = document.createElement('div');
    this.container.class = 'question';
    this.addText();
    this.addChoices();
  }

  addText(){
    let txt = document.createElement('span');
    txt.innerHTML = this.text;
    this.container.appendChild(txt);
    let br = document.createElement('br');
    this.container.appendChild(br);
  }

  addChoices(){
    this.choices.forEach( (choice) => {
      let btn = document.createElement('input');
      btn.setAttribute('type', 'checkbox');
      btn.id = choice
      // btn.innerHTML = choice;
      let label = document.createElement('label');
      label.htmlFor = choice;
      label.appendChild(document.createTextNode(choice));

      // if(choice === this.choices[0]){
      //   btn.checked = true;
      // }
      this.container.appendChild(btn);
      this.container.appendChild(label);
      let br = document.createElement('br');
      this.container.appendChild(br);
    });
    // document.getElementByTagName('')
  }

  addTo(el){
    el.appendChild(this.container);
  }

}


function addQuestion(event){
  event.preventDefault();
  console.log('add');
  let quiz = document.getElementById('quiz');
  let text = document.getElementById('text').value;
  let choices = document.getElementById('choices').value;
  let question = new Question(text, choices);
  console.log(question.container);
  question.addTo(quiz);

}

//entrypoint
document.addEventListener('DOMContentLoaded', () => {
  console.log('LOADED');
  document.getElementById('add-question').addEventListener('click', addQuestion);
  // let div = document.createElement('div');
  // div.innerHTML = 'QUIZ APP';
  // document.body.appendChild(div);

});
