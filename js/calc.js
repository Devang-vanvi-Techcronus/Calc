function displayData() {
    let screen = document.querySelector('.calc-typed')
    let button = document.querySelectorAll('.button')
    let clear = document.querySelector('.c')
    let equal = document.querySelector('.e')
    let backspace = document.querySelector('.backspace')
    // let arith = document.querySelectorAll('.l')
    // let min = document.getElementById("longg")


    document.querySelector('.calc-typed').placeholder.innerHTML = '0'
    // arith.disabled = true;

    button.forEach((bttn) => {

        // console.log(bttn.innerHTML);
        bttn.addEventListener('click', (event) => {

            // document.getElementById("longg").disabled = true
            // alert(e.target.innerHTML) 
            screen.style.color = 'black'
            let value = event.target.innerHTML

            screen.value += value
            console.log(screen.value,'aaa');

            console.log(screen.value.slice(-1));
            if (screen.value.slice(-2) == ("+-") || screen.value.slice(-2) == ("++") || screen.value.slice(-2) == ("+/") || screen.value.slice(-2) == ("+*") || screen.value.slice(-2) == ("-+") || screen.value.slice(-2) == ("-/") || screen.value.slice(-2) == ("-*") || screen.value.slice(-2) == ("--") || screen.value.slice(-2) == ("/+") || screen.value.slice(-2) == ("/-") || screen.value.slice(-2) == ("/+") || screen.value.slice(-2) == ("//") || screen.value.slice(-2) == ("*+") || screen.value.slice(-2) == ("*-") || screen.value.slice(-2) == ("*/") || screen.value.slice(-2) == ("**")) {
                screen.value = screen.value.slice(0, screen.value.length - 1)
            }

        })

   
        

    })

    equal.addEventListener('click', (e) => {
        try {

            if (screen.value != '=') {
                const myArray = screen.value.split("=");
                let ans = eval(myArray[0])
                // console.log(Number.isInteger, '1');
                if (!Number.isInteger(ans)) {
                    screen.value = ans.toFixed(2)
                } else {
                    screen.value = ans
                }
            } else {
                screen.value = ''
            }
        } catch (error) {

            if (error) {
                screen.style.color = 'red'
                screen.value = "Syntax Error"
                setTimeout(() => {
                    screen.value = ""
                }, 2000)
            }
        }

    })

    screen.addEventListener('keypress', (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            document.getElementById("btn").click()
        }
    })

    clear.addEventListener('click', () => {
        // console.log(screen.value);
        screen.value = ''
        document.querySelector('.calc-typed').placeholder.innerHTML = '0'
    })


    backspace.addEventListener('click', () => {
        screen.value = screen.value.slice(0, -2)
    })


}


displayData()








