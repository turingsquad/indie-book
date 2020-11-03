package com.dream.team.indiebook.service;

import com.dream.team.indiebook.vo.DislikeVo;
import com.dream.team.indiebook.vo.LikeVo;

import java.util.List;

public interface DislikeService {
    List<DislikeVo> getAllByBook(Long bookID);
    void createDislike(DislikeVo likeVo);
    Integer countByBook(Long bookID);
}
