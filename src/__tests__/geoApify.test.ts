import Icoords from "../interfaces/coords";
import createServer from "../utils/createServer";
import * as GeoApifyService from "../services/geoApify.service";
import supertest from "supertest";

const app = createServer();

const coords = [40.73061, -73.935242];

const zip = 10001;

const zipPayload: Icoords = {
  latitude: "40.73061",
  longitude: "-73.935242",
};

const cityPayload = "New York New York, United States";

describe("geoApify", () => {
  describe("city", () => {
    describe("given the latitude and longitude are correct", () => {
      it("should return the city name", async () => {
        const createGetCityMock = jest
          .spyOn(GeoApifyService, "getCityService")
          // @ts-ignore
          .mockReturnValueOnce(cityPayload);

        const { statusCode, body } = await supertest(app).get(
          `/api/geoapify/city/${coords[0]}/${coords[1]}`
        );

        expect(statusCode).toBe(200);
        expect(body).toBe(cityPayload);
        expect(createGetCityMock).toHaveBeenCalled();
      });
    });

    describe("given the latitude or longitude are not valid numbers", () => {
      it("should return a 400 status", async () => {
        const { statusCode, body } = await supertest(app)
          .get(`/api/geoapify/city/${coords[0]}/hello}`)
          .send();

        expect(statusCode).toBe(400);
        expect(body).toBe("bad params");
      });
    });
  });

  describe("zip", () => {
    describe("given the zip code is provided", () => {
      it("should return the coordinates", async () => {
        const createGetCoordsMock = jest
          .spyOn(GeoApifyService, "getCoordsFromZipService")
          // @ts-ignore
          .mockReturnValueOnce(zipPayload);

        const { statusCode, body } = await supertest(app)
          .get(`/api/geoapify/coords/${zip}`)
          .send();

        expect(statusCode).toBe(200);
        expect(body).toEqual(zipPayload);
        expect(createGetCoordsMock).toHaveBeenCalled();
      });
    });

    describe("given the latitude or longitude are not valid numbers", () => {
      it("should return a 400 status", async () => {
        const { statusCode, body } = await supertest(app)
          .get(`/api/geoapify/coords/hello`)
          .send();

        expect(statusCode).toBe(400);
        expect(body).toBe("bad params");
      });
    });
  });
});
