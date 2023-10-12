package prueba.tecnica.API.controllers;

import io.restassured.response.Response;
import prueba.tecnica.API.models.UserModel;

import java.util.HashMap;
import java.util.Map;

import static io.restassured.RestAssured.given;
import static prueba.tecnica.API.config.SpecBuilder.getRequestSpec;
import static prueba.tecnica.API.config.SpecBuilder.getResponseSpec;

public class UserController {

    private static final String PATH = "/user";


    public Response createUser(UserModel userModelRequest) {
        return RestResource.post(PATH,userModelRequest);
    }
    public Response getUserByUserName(String userName){
        Map<String,String> pathParam = new HashMap<>();
        pathParam.put("username",userName);
        return RestResource.get(PATH+"/"+userName);

    }
}
