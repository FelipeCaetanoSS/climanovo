import { config } from "../../config/config";
import { z } from "zod";

export const localsSchema = z.object({
  current: z.object({
    temp_c: z.number(),
    condition: z.object({
      text: z.string(),
      icon: z.string(),
    }),
  }),
});

class TouristPointService {
  #URL = config.localsUrl;
  //#URL;
  #API_KEY = config.localsKey;

  async request(city) {
    try {
      const response = await fetch(
        `https://corsproxy.io/?${this.#URL}?query=${city}&sort=POPULARITY`,
        {
          method: "GET",
          headers: {
            "X-Places-Api-Version": "2025-06-17",
            accept: "application/json",
            Authorization: "Bearer " + this.#API_KEY,
          },
        },
      );
      // if (!response) {
      //   throw new Error(`Erro na API: ${response}`);
      // }

      const data = await response.json();

      //const validatedData = localsSchema.parse(data);

      //return validatedData;
      return console.log("Json api:", data);
    } catch (error) {
      console.error("Erro lugares:", error);
    }
  }
}

// Exportando a instância apenas uma vez
export const touristPointsApi = new TouristPointService();
