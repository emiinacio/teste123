package com.artsoft.testeexo.controllers;

import com.artsoft.testeexo.dto.TABLE2ObjDTO;
import com.artsoft.testeexo.mapper.TABLE2ObjMapper;
import com.artsoft.testeexo.schema.TABLE2ObjSchema;
import com.artsoft.testeexo.services.NovoService;
import io.swagger.v3.oas.annotations.tags.Tag;
import javax.annotation.processing.Generated;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@Generated(value = "com.exocode.codegen", comments = "Generated by ExoCoding 0.0.1-SNAPSHOT")
@RestController
@Tag(name = "TABLE2Controller")
@RequiredArgsConstructor(onConstructor_ = @Autowired )
public class TABLE2ControllerController {

  private final NovoService novoService;

  private final TABLE2ObjMapper tABLE2ObjMapper;

  @DeleteMapping(path = "/table2obj/{idtable2}")
  protected ResponseEntity<Void> deleteTABLE2Obj ( @PathVariable Long idTABLE2 ){
    novoService . deleteTABLE2Obj ( idTABLE2 );
    ResponseEntity<Void> z = new ResponseEntity<> ( HttpStatus.OK );
    return z;
  }

  @GetMapping(path = "/table2obj/{idtable2}")
  protected ResponseEntity<TABLE2ObjSchema> getTABLE2Obj ( @PathVariable Long idTABLE2 ){
    TABLE2ObjDTO TABLE2ObjDTO = novoService . readTABLE2Obj ( idTABLE2 );
    TABLE2ObjSchema TABLE2ObjSchema = tABLE2ObjMapper . dtoToSchema ( TABLE2ObjDTO );
    ResponseEntity<TABLE2ObjSchema> z = new ResponseEntity<> ( TABLE2ObjSchema , HttpStatus.OK );
    return z;
  }

  @PostMapping(path = "/table2obj")
  protected ResponseEntity<TABLE2ObjSchema> postTABLE2Obj ( @RequestBody TABLE2ObjSchema TABLE2Obj ){
    TABLE2ObjDTO TABLE2ObjDTO = tABLE2ObjMapper . schemaToDto ( TABLE2Obj );
    TABLE2ObjDTO = novoService . createTABLE2Obj ( TABLE2ObjDTO );
    TABLE2ObjSchema TABLE2ObjSchema = tABLE2ObjMapper . dtoToSchema ( TABLE2ObjDTO );
    ResponseEntity<TABLE2ObjSchema> z = new ResponseEntity<> ( TABLE2ObjSchema , HttpStatus.OK );
    return z;
  }

  @PutMapping(path = "/table2obj/{idtable2}")
  protected ResponseEntity<TABLE2ObjSchema> putTABLE2Obj ( @PathVariable Long idTABLE2, @RequestBody TABLE2ObjSchema TABLE2Obj ){
    TABLE2ObjDTO TABLE2ObjDTO = tABLE2ObjMapper . schemaToDto ( TABLE2Obj );
    TABLE2ObjDTO = novoService . updateTABLE2Obj ( TABLE2ObjDTO );
    TABLE2ObjSchema TABLE2ObjSchema = tABLE2ObjMapper . dtoToSchema ( TABLE2ObjDTO );
    ResponseEntity<TABLE2ObjSchema> z = new ResponseEntity<> ( TABLE2ObjSchema , HttpStatus.OK );
    return z;
  }
}