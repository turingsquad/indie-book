package com.dream.team.indiebook.service.impl;

import com.dream.team.indiebook.entity.Like;
import com.dream.team.indiebook.repository.LikeRepository;
import com.dream.team.indiebook.service.LikeService;
import com.dream.team.indiebook.vo.LikeVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class LikeServiceImpl implements LikeService {
    private LikeRepository likeRepository;

    @Autowired
    public void setLikeRepository(LikeRepository likeRepository) {
        this.likeRepository = likeRepository;
    }

    @Override
    public List<LikeVo> getAllByBook(Long bookID) {
        List<Like> byBookID = likeRepository.findByBookID(bookID);
        return byBookID.stream()
                .map(it -> new LikeVo(it.getId(), it.getUserID()))
                .collect(Collectors.toList());
    }

    @Override
    public void createLike(LikeVo likeVo) {
        Like like = new Like(likeVo.getUserID(), likeVo.getBookID());
        likeRepository.save(like);
    }

    @Override
    public Integer countByBook(Long bookID) {
        return likeRepository.countByBookID(bookID);
    }
}