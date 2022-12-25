const btn = document.querySelector('#new-quote');
const person = document.querySelector('.person');
const quote = document.querySelector('.quote')



const quotes =  [
    {
        quote:`"The greatest glory in living lies not in never falling, but in rising every time we fall."`,
        person: 'Nelson mandela'
    },
    {
        quote:`"The way to get started is to quit talking and begin doing."`,
        person: 'Walt Disney'
    },
    {
        quote:`"Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking."`,
        person: 'Steve Jobs'
    },
    {
        quote:`"If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success."`,
        person: 'James Cameron'
    },
    {
        quote:`"Women belong to the kitchen and the other room."`,
        person: 'Muhammadu Buhari'
    },
    {
        quote:`"What money cannot do, more money can do it."`,
        person: 'Godswill Akpabio'
    },
    {
        quote:`"The future belongs to those who believe in the beauty of their dreams."`,
        person: 'Eleanor Roosevelt'
    },
    {
        quote:`"Life is either a daring adventure or nothing at all."`,
        person: 'Helen Keller'
    },
    {
        quote:`"A lizard in Nigeria can never become a Godzilla in America"`,
        person: 'David Oyedepo'
    },
    {
        quote:`"Never let the fear of striking out keep you from playing the game."`,
        person: 'Babe Ruth'
    }
]


btn.addEventListener('click', () =>{
  let i = Math.floor(Math.random()*quotes.length)
       quote.innerText = quotes[i].quote;
    person.innerText = quotes[i].person;
    console.log(quotes[i].quote + " " +   quotes[i].person)
   
    
})
