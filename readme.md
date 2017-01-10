# API BaseJump: Image Search Abstraction Layer


## User Stories:
> * I can get the image URLs, alt text and page urls for a set of images relating to a given search string.
> * I can paginate through the responses by adding a ?offset=2 parameter to the URL.
> * I can get a list of the most recently submitted search strings.


## Example Usage:
Search for 'keyword' (10 at a time):
<pre><code>http://localhost:3000/api/imagesearch/lolcats</code></pre>

View 2nd page of results:
<pre><code>http://localhost:3000/api/imagesearch/lolcats&offset=10</code></pre>


Search for 'multiple keywords':
<pre><code>http://localhost:3000/api/imagesearch/lolcats funny&offset=10</code></pre>


View history of the latest 10 submitted searches:
<pre><code>http://localhost:3000/api/latest/imageseach</code></pre>


## Google CSE Instructions

Based on instructions from: [https://github.com/vadimdemedes/google-images](https://github.com/vadimdemedes/google-images)
and this documentation: [https://developers.google.com/custom-search/json-api/v1/overview](https://developers.google.com/custom-search/json-api/v1/overview)

NOTE: only accepts 100 searches per day. Can purchase additional searches for $5/1000 queries.

1. Create a Google Custom Search Engine ([https://cse.google.com/cse](https://cse.google.com/cse))
2. name the search, but do NOT specify any sites (ie. search entire web, rather than any specific sites).
3. under advanced, enable image search.
4. under advanced, 'Restrict Pages by Schema.org Types'. Use 'Thing' (ie. root-level, everything) as the limitation.
5. get CX ID from this page.
5. Set up a Google Custom Search Engine API ([https://console.developers.google.com/](https://console.developers.google.com/))
6. Create a Credential (API Key).
7. check quota usage here: [https://code.google.com/apis/console](https://code.google.com/apis/console)


### Google API Explorer Tests

[https://developers.google.com/apis-explorer/#p/customsearch/v1/](https://developers.google.com/apis-explorer/#p/customsearch/v1/)


### cURL Tests

<pre><code>curl -i -H "Accept: application/json" -H "Content-Type: application/json" -X GET "https://www.googleapis.com/customsearch/v1?key=ABCabc123ABC_ab1A-A&cx=0123456789:abcdefghij&q=testing+1+2+3+4&num=10&searchType=image&alt=json"</code></pre>

## Contents of .env File:

<pre><code>DB_URL='mongodb://localhost:27017/searchdb'
API_KEY='ABCabc123ABC_ab1A-A''
CX='0123456789:abcdefghi'</code></pre>
