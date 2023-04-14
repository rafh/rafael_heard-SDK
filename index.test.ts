import { expect, vi, it, describe, beforeAll } from 'vitest';
import LotrSdk from './index';

describe('LotrSdk', () => {
  let sdk: LotrSdk;

  beforeAll(() => {
    sdk = new LotrSdk('testApiKey', 'testId');
  });

  describe('getAllMovies', () => {
    it('should fetch all movies', async () => {
      const mockResponse = {
        docs: [
          { _id: 'movie1', name: 'Movie 1', runtimeInMinutes: 100 },
          { _id: 'movie2', name: 'Movie 2', runtimeInMinutes: 120 },
        ],
      };
      vi.spyOn(window, 'fetch').mockResolvedValueOnce({
        ok: true,
        json: vi.fn().mockResolvedValueOnce(mockResponse),
      } as any);
      const result = await sdk.getAllMovies();
      expect(result).toEqual(mockResponse.docs);
      expect(window.fetch).toHaveBeenCalledWith(
        'https://the-one-api.dev/v2/movie',
        {
          headers: {
            Authorization: 'Bearer testApiKey',
          },
        },
      );
    });

    it('should handle errors', async () => {
      vi.spyOn(window, 'fetch').mockResolvedValueOnce({
        ok: false,
        status: 500,
      } as Response);
      await expect(sdk.getAllMovies()).rejects.toThrow('Server Error');
    });
  });

  describe('getMovieById', () => {
    it('should fetch a movie by id', async () => {
      const mockResponse = {
        docs: { _id: 'movie1', name: 'Movie 1', runtimeInMinutes: 100 },
      };
      vi.spyOn(window, 'fetch').mockResolvedValueOnce({
        ok: true,
        json: vi.fn().mockResolvedValueOnce(mockResponse),
      } as any);
      const result = await sdk.getMovieById();
      expect(result).toEqual(mockResponse.docs);
      expect(window.fetch).toHaveBeenCalledWith(
        'https://the-one-api.dev/v2/movie/testId',
        {
          headers: {
            Authorization: 'Bearer testApiKey',
          },
        },
      );
    });

    it('should handle errors', async () => {
      vi.spyOn(window, 'fetch').mockResolvedValueOnce({
        ok: false,
        status: 404,
      } as Response);
      await expect(sdk.getMovieById()).rejects.toThrow('Not Found');
    });
  });

  describe('getAllMovieQuotes', () => {
    it('should fetch all movie quotes', async () => {
      const mockResponse = {
        docs: [
          {
            _id: 'quote1',
            dialog: 'Quote 1',
            movie: 'Movie 1',
            character: 'Character 1',
          },
          {
            _id: 'quote2',
            dialog: 'Quote 2',
            movie: 'Movie 2',
            character: 'Character 2',
          },
        ],
      };
      vi.spyOn(window, 'fetch').mockResolvedValueOnce({
        ok: true,
        json: vi.fn().mockResolvedValueOnce(mockResponse),
      } as any);
      const result = await sdk.getAllMovieQuotes();
      expect(result).toEqual(mockResponse.docs);
      expect(window.fetch).toHaveBeenCalledWith(
        'https://the-one-api.dev/v2/quote',
        {
          headers: {
            Authorization: 'Bearer testApiKey',
          },
        },
      );
    });

    it('should handle errors', async () => {
      vi.spyOn(window, 'fetch').mockResolvedValueOnce({
        ok: false,
        status: 401,
      } as Response)
		})
	})
})
