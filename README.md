# PaperGenerator
A paper generator application based on some inputs.<br />

To run the application: >> node generator.js<br />

You need to answer some questions to generate the Question Paper:( Example is shown )<br />
-------------------------------------------------------------------------------------<br />
#1)<br />
{<br />
  &nbsp;&nbsp;marks: '100',<br />
  &nbsp;&nbsp;points: { easy: '5', medium: '10', hard: '15' },<br />
  &nbsp;&nbsp;subject: 'Physics',<br />
  &nbsp;&nbsp;difficulty: { easy: '20', medium: '50', hard: '30' },<br />
  &nbsp;&nbsp;topics: [ [ 'Waves', 3 ], [ 'Relativity', 4 ], [ 'Electricity', 4 ] ]<br />
}<br />
#2)<br />
{<br />
  &nbsp;&nbsp;marks: '100',<br />
  &nbsp;&nbsp;subject: 'physics',<br />
  &nbsp;&nbsp;difficulty: { easy: '20', medium: '50', hard: '30' },<br />
  &nbsp;&nbsp;topics: {}<br />
}<br />
You can use this generated input for reference:<br />
-----------------------------------------------<br />


Enter total marks of question paper: 100<br />
Enter subject of question paper: physics<br />
Enter total marks for 'easy' questions: 20<br />
Enter total marks for 'medium' questions: 50<br />
Enter total marks for 'hard' questions: 30<br />
Do you want to make a question paper topic wise by entering the percentage of questions each topic will hold? If 'yes' enter 1 otherwise enter anything else: 1<br />
Enter the name of the topic: Waves<br />
Enter the percent of questions you want from this topic: 30<br />
DO you want to continue adding topics? if 'yes' press 1 otherwise anything else: 1<br />
Enter the name of the topic: Relativity<br />
Enter the percent of questions you want from this topic: 40<br />
DO you want to continue adding topics? if 'yes' press 1 otherwise anything else: 1<br />
Enter the name of the topic: Electricity<br />
Enter the percent of questions you want from this topic: 30<br />
DO you want to continue adding topics? if 'yes' press 1 otherwise anything else: n<br />

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------<br />

Note: The question json file only contains three subjects questions Physics, Chemistry, Mathematics. You can use your sample data also. copy that json data in the file
and name it as - let questions = [<Your Data>]

