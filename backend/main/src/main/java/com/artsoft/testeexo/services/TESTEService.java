package com.artsoft.testeexo.services;

import com.artsoft.testeexo.dto.TABLE3ObjDTO;
import com.artsoft.testeexo.exceptions.NotFoundException;
import com.artsoft.testeexo.mapper.TABLE3ObjMapper;
import com.artsoft.testeexo.mapper.TABLE3ObjReadMapper;
import com.artsoft.testeexo.mapper.TABLE3ObjWriteMapper;
import com.artsoft.testeexo.model.TABLE3;
import com.artsoft.testeexo.repos.TABLE3Repository;
import javax.annotation.processing.Generated;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Generated(value = "com.exocode.codegen", comments = "Generated by ExoCoding 0.0.1-SNAPSHOT")
@Service
@RequiredArgsConstructor(onConstructor_ = @Autowired )
public class TESTEService {

  private final TABLE3Repository tABLE3Repository;

  private final TABLE3ObjMapper tABLE3ObjMapper;

  private final TABLE3ObjReadMapper tABLE3ObjReadMapper;

  private final TABLE3ObjWriteMapper tABLE3ObjWriteMapper;

  public TABLE3ObjDTO createTABLE3Obj ( TABLE3ObjDTO TABLE3Obj ){
    TABLE3ObjDTO TABLE3ObjOut;
    TABLE3 tABLE3Entity = tABLE3ObjMapper . dtoToEntity ( TABLE3Obj );
    TABLE3 tABLE3Saved = tABLE3Repository . save ( tABLE3Entity );
    TABLE3ObjOut = tABLE3ObjMapper . entityToDto ( tABLE3Saved );
    return TABLE3ObjOut;
  }

  public void deleteTABLE3Obj ( Long idTABLE3 ){
    TABLE3 tABLE3Entity = tABLE3Repository . findById ( idTABLE3 ) .orElseThrow(() -> new NotFoundException());
    tABLE3Repository . delete ( tABLE3Entity );
  }

  public TABLE3ObjDTO readTABLE3Obj ( Long idTABLE3 ){
    TABLE3ObjDTO TABLE3ObjOut;
    TABLE3 tABLE3Entity = tABLE3Repository . findById ( idTABLE3 ) .orElseThrow(() -> new NotFoundException());
    TABLE3ObjOut = tABLE3ObjMapper . entityToDto ( tABLE3Entity );
    return TABLE3ObjOut;
  }

  public TABLE3ObjDTO updateTABLE3Obj ( TABLE3ObjDTO TABLE3Obj ){
    TABLE3ObjDTO TABLE3ObjOut;
    TABLE3 tABLE3Entity = tABLE3Repository . findById ( TABLE3Obj.getIdTABLE3() ) .orElseThrow(() -> new NotFoundException());
    tABLE3ObjMapper . updateFromDto ( tABLE3Entity , TABLE3Obj );
    TABLE3 tABLE3Saved = tABLE3Repository . save ( tABLE3Entity );
    TABLE3ObjOut = tABLE3ObjMapper . entityToDto ( tABLE3Saved );
    return TABLE3ObjOut;
  }
}