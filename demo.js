var inquirer = require('inquirer');
const cp = require('child_process')

function displayList() {
    inquirer
        .prompt([{
            type: 'list',
            name: 'selection',
            choices: ['About', 'Skills', 'Academics', 'Projects']
        }])
        .then(function(ans) {
            // if (ans.selection == 'choice1') {
            //     console.log('choice1 selected')
            // } else {
            //     console.log('choice2 selected')
            // }
            if (ans.selection == 'About') {
                console.log(`Hello! I am Swati Goel, CSE undergraduate with a keen interest in exploring different technologies. I am a Front-End Web Developer and an open source Enthusiast, enhancing my skills of Data Structures and Algorithms. I am an optimistic personality,
            passionate about my work. Self-motivated and energetic team player with a strong work ethic and cooperative attitude. Always open for discussion.`)
                displayNext()
            } else if (ans.selection == 'Skills') {
                console.log('JAVA, JavaScript, GitHub, Git, Node.js')
                displayNext()
            } else if (ans.selection == 'Academics') {
                cp.execSync('start chrome https://drive.google.com/file/d/1eHqVj4-3Cs727Nz6Li8q4N42iLyLgM5j/view?usp=sharing')
                displayNext()
            } else if (ans.selection == 'Projects') {
                cp.execSync('start chrome https://github.com/Swati002')
                displayNext()
            }
        });
}

displayList()

// Go back option ->

function displayNext() {
    inquirer
        .prompt([{
            type: 'list',
            name: 'selection',
            choices: ['Go back', 'exit']

        }])
        .then(function(ans) {
            if (ans.selection == 'Go back') {
                displayList()
            } else if (ans.selection == "exit") {
                console.log('Resume closed')
            }
        })
}