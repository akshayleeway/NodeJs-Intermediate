import { expect, use, request } from "chai";
import chaiHttp from "chai-http";
import { describe, it } from "mocha";
import app from "../server";
import LHTLogger from "../app/utils/logger";

use(chaiHttp);

const tenantId = "64410851e83a2e2318bc7926";
const appId = "644112540d5cda1ce234bbeb";
const knowledgeBase = "64467e2865a49a538c48f34f";
const userId = "auth0|643edc7168e1c5730790c9a4";
const conversationId = "6441238907a73954388fc653";
let testAppId = "";
let testKnowledgeBaseId = "";
let apiKey = "";
let testKnowledgeBaseImportId = "";
let websiteUrl = "https://www.google.com";
let authorizationToken =
  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyVHlwZSI6ImFkbWluIiwiaWF0IjoxNjkxNjU1MzY2LCJleHAiOjE2OTE2ODQxNjZ9.VH4Em-4D-cAj__PC26-r0Bi7lP5qAMP4HXLNq_uo2Ac';

describe("App Module", () => {
  before("optional description", (done) => {
    setTimeout(() => {
      done();
    }, 5000);
  });

  describe("Get Project  Details  ", () => {
    it("should get Project details  ", async () => {
      const res = await request(app)
        .get(`/projects`)
        .set("authorization", authorizationToken);
      // console.log(res.body)
      expect(res.body.responseCode).to.equal(200);
      expect(res.body).to.include.all.keys(
        "responseData",
        "message",
        "success",
        "responseCode"
      );
    });
  });

 describe("Create Project", () => {
    let requestData = {
      name: "LNDs",
      description: "New LND cases",
    };
    it("should create project", async () => {
      const res = await request(app)
        .post("/create-project")
        .send(requestData)
        .set("authorization", authorizationToken);
      testAppId = res.body.responseData._id;
      // LHTLogger.info(
      //   `POST /manage-app- TEST`,
      //   JSON.stringify(res.body.message)
      // );
      expect(res.body.responseCode).to.equal(200);
      expect(res.body).to.include.all.keys(
        "responseData",
        "message",
        "success",
        "responseCode"
      );
    });
  });


  describe("delete Project", () => {
    let requestData = {
      name: "idke"
    };
    it("should delete project", async () => {
      const res = await request(app)
        .delete("/projects")
        .send(requestData)
        .set("authorization", authorizationToken);
      testAppId = res.body.responseData._id;
      // LHTLogger.info(
      //   `POST /manage-app- TEST`,
      //   JSON.stringify(res.body.message)
      // );
      expect(res.body.responseCode).to.equal(200);
      expect(res.body).to.include.all.keys(
        "responseData",
        "message",
        "success",
        "responseCode"
      );
    });
  });


  describe("alter Project", () => {
    let requestData = {
      id: "64d35ecfaa8809546c1476e1",
      name: "LND New Learning"
    };
    it("should alter project", async () => {
      const res = await request(app)
        .put("/projects")
        .send(requestData)
        .set("authorization", authorizationToken);
      testAppId = res.body.responseData._id;
      // LHTLogger.info(
      //   `POST /manage-app- TEST`,
      //   JSON.stringify(res.body.message)
      // );
      expect(res.body.responseCode).to.equal(200);
      expect(res.body).to.include.all.keys(
        "responseData",
        "message",
        "success",
        "responseCode"
      );
    });
  });


  describe("Get user ", () => {
    it("Get User details ", async () => {
      const res = await request(app)
        .get(`/user`)
        .set("authorization", authorizationToken);
      // console.log(res.body)
      expect(res.body.responseCode).to.equal(200);
      expect(res.body).to.include.all.keys(
        "responseData",
        "message",
        "success",
        "responseCode"
      );
    });
  });

 describe("Create User", () => {
    let requestData = {
      username: "lnds",
      email: "lnds@gamil.com",
    };
    it("create  user", async () => {
      const res = await request(app)
        .post("/create-user")
        .send(requestData)
        .set("authorization", authorizationToken);
      testAppId = res.body.responseData._id;
      // LHTLogger.info(
      //   `POST /manage-app- TEST`,
      //   JSON.stringify(res.body.message)
      // );
      expect(res.body.responseCode).to.equal(200);
      expect(res.body).to.include.all.keys(
        "responseData",
        "message",
        "success",
        "responseCode"
      );
    });
  });


  describe("Get Task  Details  ", () => {
    it("should get Project details  ", async () => {
      const res = await request(app)
        .get(`/task`)
        .set("authorization", authorizationToken);
      // console.log(res.body)
      expect(res.body.responseCode).to.equal(200);
      expect(res.body).to.include.all.keys(
        "responseData",
        "message",
        "success",
        "responseCode"
      );
    });
  });


  describe("create  task   ", () => {
    let requestData = {
      project:"64d2915fe60c1736d0c98c56",
      title: "new workshop",
    description:  "i agree is training ",
    assignee: "64d2a7ddd12f1155107a06c6"
    };
    it("should delete project", async () => {
      const res = await request(app)
        .post("/create-task")
        .send(requestData)
        .set("authorization", authorizationToken);
      testAppId = res.body.responseData._id;
      // LHTLogger.info(
      //   `POST /manage-app- TEST`,
      //   JSON.stringify(res.body.message)
      // );
      expect(res.body.responseCode).to.equal(200);
      expect(res.body).to.include.all.keys(
        "responseData",
        "message",
        "success",
        "responseCode"
      );
    });
  });


  describe("alter task", () => {
    let requestData = {
      id:"64d36fc475dee024dcded235",
      assignee : "64d4a32ee49b0c456c7e9c07"
     
    };
    it("should alter task", async () => {
      const res = await request(app)
        .put("/task")
        .send(requestData)
        .set("authorization", authorizationToken);
      testAppId = res.body.responseData._id;
      // LHTLogger.info(
      //   `POST /manage-app- TEST`,
      //   JSON.stringify(res.body.message)
      // );
      expect(res.body.responseCode).to.equal(200);
      expect(res.body).to.include.all.keys(
        "responseData",
        "message",
        "success",
        "responseCode"
      );
    });
  });

  describe("delete  task", () => {
    let requestData = {
      title: "new LND workshop",
    };
    it("should alter project", async () => {
      const res = await request(app)
        .delete("/task")
        .send(requestData)
        .set("authorization", authorizationToken);
      testAppId = res.body.responseData._id;
      // LHTLogger.info(
      //   `POST /manage-app- TEST`,
      //   JSON.stringify(res.body.message)
      // );
      expect(res.body.responseCode).to.equal(200);
      expect(res.body).to.include.all.keys(
        "responseData",
        "message",
        "success",
        "responseCode"
      );
    });
  });


  describe("get specific  task   ", () => {
    let requestData = {
      assignee: "64d2a7ddd12f1155107a06c6"
    };
    it("should specific assignee project", async () => {
      const res = await request(app)
        .get("/task")
        .send(requestData)
        .set("authorization", authorizationToken);
      testAppId = res.body.responseData._id;
      // LHTLogger.info(
      //   `POST /manage-app- TEST`,
      //   JSON.stringify(res.body.message)
      // );
      expect(res.body.responseCode).to.equal(200);
      expect(res.body).to.include.all.keys(
        "responseData",
        "message",
        "success",
        "responseCode"
      );
    });
  });

});