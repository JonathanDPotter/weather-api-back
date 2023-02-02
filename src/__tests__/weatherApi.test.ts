import createServer from "../utils/createServer";
import supertest from "supertest";
import getCurrentResponse from "../__mockResponses__/current.json";
import getThreeDayResponse from "../__mockResponses__/threeDay.json";
import * as WeatherApiService from "../services/weatherApi.service";

const app = createServer();

const coords = [40.73061, -73.935242];

describe("weatherApi", () => {
  describe("get current", () => {
    describe("given the lattitude and longitude are provided correctly", () => {
      it("should return the current weather", async () => {
        const createGetCurrentMock = jest
          .spyOn(WeatherApiService, "getCurrentService")
          // @ts-ignore
          .mockReturnValueOnce(getCurrentResponse);

        const { status, body } = await supertest(app).get(
          `/api/weather/current/${coords[0]}/${coords[1]}`
        );

        expect(status).toBe(200);
        expect(body).toEqual(getCurrentResponse);
        expect(createGetCurrentMock).toHaveBeenCalled();
      });
    });

    describe("given the lattitude is not a number", () => {
      it("should throw an error", async () => {
        const { status, body } = await supertest(app).get(
          `/api/weather/current/foo/${coords[1]}`
        );

        expect(status).toBe(400);
        expect(body).toBe("bad params");
      });
    });

    describe("given the longitude is not a number", () => {
      it("should throw an error", async () => {
        const { status, body } = await supertest(app).get(
          `/api/weather/current/${coords[0]}/bar`
        );

        expect(status).toBe(400);
        expect(body).toBe("bad params");
      });
    });
  });

  describe("get three-day", () => {
    describe("given the lattitude and longitude are provided correctly", () => {
      it("should return the current weather", async () => {
        const createGetThreeDayMock = jest
          .spyOn(WeatherApiService, "getThreeDayService")
          // @ts-ignore
          .mockReturnValueOnce(getThreeDayResponse);

        const { status, body } = await supertest(app).get(
          `/api/weather/three-day/${coords[0]}/${coords[1]}`
        );

        expect(status).toBe(200);
        expect(body).toEqual(getThreeDayResponse);
        expect(createGetThreeDayMock).toHaveBeenCalled();
      });
    });

    describe("given the lattitude is not a number", () => {
      it("should throw an error", async () => {
        const { status, body } = await supertest(app).get(
          `/api/weather/three-day/foo/${coords[1]}`
        );

        expect(status).toBe(400);
        expect(body).toBe("bad params");
      });
    });

    describe("given the longitude is not a number", () => {
      it("should throw an error", async () => {
        const { status, body } = await supertest(app).get(
          `/api/weather/three-day/${coords[0]}/bar`
        );

        expect(status).toBe(400);
        expect(body).toBe("bad params");
      });
    });
  });
});
