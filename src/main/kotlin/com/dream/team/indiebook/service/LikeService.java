package com.dream.team.indiebook.service;

import com.dream.team.indiebook.vo.LikeVo;

import java.util.List;

public interface LikeService {
    List<LikeVo> getAllByBook(Long bookID);
    void createLike(LikeVo likeVo);
    Integer countByBook(Long bookID);
}
