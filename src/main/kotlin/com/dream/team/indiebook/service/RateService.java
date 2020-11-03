package com.dream.team.indiebook.service;

import com.dream.team.indiebook.vo.DislikeVo;
import com.dream.team.indiebook.vo.LikeVo;

import java.util.List;

public interface RateService {
    List<LikeVo> getAllLikesByBook(Long bookID);
    List<DislikeVo> getAllDislikesByBook(Long bookID);
    void createLike(LikeVo likeVo);
    void createDislike(DislikeVo dislikeVo);
    Integer countLikesByBook(Long bookID);
    Integer countDislikesByBook(Long bookID);
}
