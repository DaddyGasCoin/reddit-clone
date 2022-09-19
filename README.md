# Summary
 A reddit clone built using react and firebase
 
[Live Preview](https://daddygascoin.github.io/reddit-clone/) :point_left:

## Features
 - View multiple subreddits
 - Sort posts of a subreddit [all time,new,week,etc] 
- View comments
- Sort comments
- View rules of subreddit

## Tools

### Frameworks
- [React](https://reactjs.org/)
### Packages
- [React Router](https://reactrouter.com/)
- [FireBase](http://firebase.google.com/)
- [pretty-ms](https://www.npmjs.com/package/pretty-ms) 
- [Lodash](https://lodash.com/)
- [ssnoowrap](https://not-an-aardvark.github.io/snoowrap/)
 
### Database
- [FireStore](https://firebase.google.com/products/firestore)

# Description
 All data is retrived using the [ssnoowrap](https://not-an-aardvark.github.io/snoowrap/) wrapper for the reddit API and stored in firestore. Each collection in the database contains data for one subreddit and its sort. eg Ask-reddit-Top-All containg the top posts of all time for the AskReddit sub. Unfortunately i couldnt figure out how to store a collection within a collecion without manually entering it so instead of something like this: 
 
 - Subreddit-A 
   - A-HOT-Posts
     - Post-Data
   - A-New-Posts
     - Post-Data
   - A-Top-Posts
      - All Time Post
          - Posts Data
       - Top Year Post
          - Posts Data
        - Top Month Post
          - Posts Data
    
 - Subreddit-B 
   - B-HOT-Posts
     - Post-Data
   - B-New-Posts
     - Post-Data
   - B-Top-Posts
      - All Time Post
          - Posts Data
       - Top Year Post
          - Posts Data
        - Top Month Post
          - Posts Data
          
 the database ended up something like this:
 
 - Subreddit-A-Top-All-Time
 - Subreddit-A-Top-Month
 - Subreddit-A-Top-Month
 - Subreddit-B-Top-All-Time
 - Subreddit-B-Top-Month
 - Subreddit-B-Top-Month
 
 The downside of this was when creating dynamic routes i couldnt use the paramters to query the database
 ```
  <Route path=":sub" element={<DisplayPage handler={sortHandler} />} />
  <Route path=":sub/:filter" element={<DisplayPage handler={sortHandler} />} />
  ```
  if the first path was hit which  displays the hot page of the sub i could match the :sub paramter and query the *:sub*-Hot-Posts from the database
   ```
 const querySnapshot = await getDocs(collection(db, `${param.sub}-Hot-Posts`))
  ```
  but if the the user wanted to view the Top posts of this month for the Askreddit sub it would be easy to get all the documents from the former database architecture
  something like this 
  ```
 const querySnapshot = await getDocs(collection(db, param.sub,param.filter))
  ```
Unfortunately my database isnt stored like that so i ended up created some sort of map to match the firestore collection
``` 
  AskReddit: {
      'ThisMonth': 'askreddit-top-month',
      'Hot': 'askreddit-hot',
      'ThisWeek': 'askreddit-top-week',
      'ThisYear': 'askreddit-top-year',
      'AllTime': 'askreddit-top-all',
      'New': 'askreddit-new'
    }
    
  //Askreddit is a property of an object subMap
   
    doc = subMap[params.sub][params.filter]
    querySnapshot = await getDocs(collection(db, doc)

 ```
 This also meant that i have to keep track of the current sub and sort always since the comments are stored along with each post document else its not possible to query /comments/id if the id belongs to a differet document
 
