package com.artsoft.testeexo.services;

import com.artsoft.testeexo.dto.TABLE1ObjDTO;
import com.artsoft.testeexo.exceptions.NotFoundException;
import com.artsoft.testeexo.mapper.TABLE1ObjMapper;
import com.artsoft.testeexo.mapper.TABLE1ObjReadMapper;
import com.artsoft.testeexo.mapper.TABLE1ObjWriteMapper;
import com.artsoft.testeexo.model.TABLE1;
import com.artsoft.testeexo.repos.TABLE1Repository;
import java.util.List;
import javax.annotation.processing.Generated;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Generated(value = "com.exocode.codegen", comments = "Generated by ExoCoding 0.0.1-SNAPSHOT")
@Service
@RequiredArgsConstructor(onConstructor_ = @Autowired )
public class DfsService {

  private final TABLE1Repository tABLE1Repository;

  private final TABLE1ObjMapper tABLE1ObjMapper;

  private final TABLE1ObjReadMapper tABLE1ObjReadMapper;

  private final TABLE1ObjWriteMapper tABLE1ObjWriteMapper;

  public TABLE1ObjDTO createTABLE1Obj ( TABLE1ObjDTO TABLE1Obj ){
    TABLE1ObjDTO TABLE1ObjOut;
    TABLE1 tABLE1Entity = tABLE1ObjMapper . dtoToEntity ( TABLE1Obj );
    TABLE1 tABLE1Saved = tABLE1Repository . save ( tABLE1Entity );
    TABLE1ObjOut = tABLE1ObjMapper . entityToDto ( tABLE1Saved );
    return TABLE1ObjOut;
  }

  public void deleteTABLE1Obj ( Long idTABLE1 ){
    TABLE1 tABLE1Entity = tABLE1Repository . findById ( idTABLE1 ) .orElseThrow(() -> new NotFoundException());
    tABLE1Repository . delete ( tABLE1Entity );
  }

  public TABLE1ObjDTO readTABLE1Obj ( Long idTABLE1 ){
    TABLE1ObjDTO TABLE1ObjOut;
    TABLE1 tABLE1Entity = tABLE1Repository . findById ( idTABLE1 ) .orElseThrow(() -> new NotFoundException());
    TABLE1ObjOut = tABLE1ObjMapper . entityToDto ( tABLE1Entity );
    return TABLE1ObjOut;
  }

  public List<TABLE1ObjDTO> readTABLE1ObjList (){
    List<TABLE1ObjDTO> TABLE1ObjListOut;
    List<TABLE1> tABLE1Entity = tABLE1Repository . findAll();
    TABLE1ObjListOut = tABLE1ObjMapper . entityToDto ( tABLE1Entity );
    return TABLE1ObjListOut;
  }

  public TABLE1ObjDTO updateTABLE1Obj ( TABLE1ObjDTO TABLE1Obj ){
    TABLE1ObjDTO TABLE1ObjOut;
    TABLE1 tABLE1Entity = tABLE1Repository . findById ( TABLE1Obj.getIdTABLE1() ) .orElseThrow(() -> new NotFoundException());
    tABLE1ObjMapper . updateFromDto ( tABLE1Entity , TABLE1Obj );
    TABLE1 tABLE1Saved = tABLE1Repository . save ( tABLE1Entity );
    TABLE1ObjOut = tABLE1ObjMapper . entityToDto ( tABLE1Saved );
    return TABLE1ObjOut;
  }
}