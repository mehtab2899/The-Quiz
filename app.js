window.onload = function(){
const correctAnswers = ['B', 'A', 'A', 'B'];
const  frm = document.querySelector('.quiz-form');
const result = document.querySelector('.result');

      frm.addEventListener('submit', e => {
          e.preventDefault();

          let score = 0;
          const userAnswers = [frm.q1.value, frm.q2.value, frm.q3.value, frm.q4.value];

// check answers
        userAnswers.forEach((answer, index) => {
            if(answer === correctAnswers[index]){
                score += 25;
            }
        });
        
// show the result on page  
       

        result.querySelector('span').textContent = `${score}%`;
        result.classList.remove('d-none');
        
        scrollTo(0,0);

        var output = 0;
        const timer = setInterval(() => {
            result.querySelector('span').textContent = `${output}%`;
            if(output === score) {
                clearInterval(timer);
            } else {
                output++;
            }
        }, 10);
      });

}
    