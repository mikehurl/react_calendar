# React Calendar

## Learning to use React with Rails

### Challenge
During the final fortnight at Makers Academy we worked in small teams on projects of our choosing. My team are creating a web app that will allow users to select a food profile based on five flavours and receive a recommended wine or wines. A huge part of Makers is diving into new ideas and concepts without trepidation and our team felt using React would scratch that particular itch.

For a few hours, I worked my way through the tutorial at https://learnetto.com/course_parts/655, generously provided by Hrishi Mittal. The result is an appointments saving app that is a one page web app that does not need to refresh in order to re-render changes in state.

#### Tools
- Ruby on Rails 5
- react-rails gem
- haml gem
- PostgreSQL

#### To use
- `git clone https://github.com/mikehurl/react_calendar.git`
- `cd react_calendar`
- `bundle`
- `bin/rake db:create`
- `bin/rake db:migrate`
- `rails s`

Then open up your browser and navigate to `localhost:3000` to create your own appointments!

#### To do
I have completed section 3.4 and all before. The rest of the course entails incorporating Moment.js; react-datetime; styling CSS in React; and deploying to Heroku. There then follows a section about ECMAScript 6.
