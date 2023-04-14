
interface Quote {
	_id: string;
	dialog: string;
	movie: string;
	character: string;
	id: string;
}

interface Movie {
	_id: string;
	name: string;
	runtimeInMinutes: number;
	boxOfficeRevenueInMillions: number;
	academyAwardNominations: number;
	academyAwardWins: number;
	rottenTomatesScore: number;
	budgetInMillions: number;
}


class LotrSdk {
	private apiKey: string;
	private id: string;
	private baseUrl: string = 'https://the-one-api.dev/v2';

	constructor(apiKey: string, id: string) {
		this.apiKey = apiKey ?? '';
		this.id = id ?? '';
	}

	private async handleErrors(response: Response) {
		if (!response.ok) {
			throw new Error('Bad Response', {
				cause: response.status,
			});
		}
		return response.json();
	}


	private getErrorMessage(error: unknown) {
		let errorMessage: string;
		switch ((error as Error).cause) {
			case 401:
				errorMessage = 'Unauthorized';
				break;
			case 404:
				errorMessage = 'Not Found';
				break;
			case 500:
				errorMessage = 'Server Error';
				break;
			default:
				errorMessage = 'Something went wrong';
				break;
		}
		throw new Error(errorMessage);
	}

	async getAllMovies(): Promise<Movie[] | undefined> {
		try {
			const response = await fetch(`${this.baseUrl}/movie`, {
				headers: {
					Authorization: `Bearer ${this.apiKey}`,
				},
			});
			const data = await this.handleErrors(response);
			return data.docs;
		} catch (error) {
			this.getErrorMessage(error);
		}
	}

	async getMovieById(): Promise<Movie[] | undefined> {
		try {
			const response = await fetch(`${this.baseUrl}/movie/${this.id}`, {
				headers: {
					Authorization: `Bearer ${this.apiKey}`,
				},
			});
			const data = await this.handleErrors(response);
			return data.docs;
		} catch (error) {
			this.getErrorMessage(error);
		}
	}

	async getAllMovieQuotes(): Promise<Quote[] | undefined> {
		try {
			const response = await fetch(`${this.baseUrl}/quote`, {
				headers: {
					Authorization: `Bearer ${this.apiKey}`,
				},
			});
			const data = await this.handleErrors(response);
			return data.docs;
		} catch (error) {
			this.getErrorMessage(error);
		}
	}

	async getMovieQuotesById(): Promise<Quote[] | undefined> {
		try {
			const response = await fetch(`${this.baseUrl}/movie/${this.id}/quote`, {
				headers: {
					Authorization: `Bearer ${this.apiKey}`,
				},
			});
			const data = await this.handleErrors(response);
			return data.docs;
		} catch (error) {
			this.getErrorMessage(error);
		}
	}
}

export default LotrSdk;