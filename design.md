# LOTR SDK

This is a TypeScript library that provides a client for The One API, which is a RESTful API that provides data about the Lord of the Rings movies and books. The SDK is designed to be used in a Node.js environment.

## Installation

You can install this library using npm. To install the latest version, use the following command:

```bash
npm install lotr-sdk
```

## Usage

To use the LotrSdk class, you need to create an instance of it, passing your API key and the ID of the movie or quote that you want to retrieve (if applicable). You can then call the methods of the class to retrieve the data.

```typescript
import LotrSdk from 'lotr-sdk';

const apiKey = 'your-api-key';
const movieId = 'movie-id';
const quoteId = 'quote-id';

const sdk = new LotrSdk(apiKey, movieId);

const movies = await sdk.getAllMovies();
const movieById = await sdk.getMovieById();
const allQuotes = await sdk.getAllMovieQuotes();
const quotesById = await sdk.getMovieQuotesById();
```

## Methods

`constructor(apiKey: string, id: string)`
Creates a new instance of the LotrSdk class.

- `apiKey`: Your API key for The One API.
- `id`: The ID of the movie or quote that you want to retrieve.

`getAllMovies(): Promise<Movie[] | undefined>`
Retrieves all movies from The One API.

Returns an array of `Movie` objects.

`getMovieById(): Promise<Movie[] | undefined>`
Retrieves a specific movie from The One API, based on the id parameter passed to the constructor.

Returns an array of `Movie` objects.

`getAllMovieQuotes(): Promise<Quote[] | undefined>`
Retrieves all quotes from The One API.

Returns an array of `Quote` objects.

`getMovieQuotesById(): Promise<Quote[] | undefined>`
Retrieves all quotes for a specific movie from The One API, based on the id parameter passed to the constructor.

Returns an array of `Quote` objects.
