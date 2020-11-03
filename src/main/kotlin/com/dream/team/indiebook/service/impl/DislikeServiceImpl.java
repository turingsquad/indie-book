package com.dream.team.indiebook.service.impl;

import com.dream.team.indiebook.entity.Dislike;
import com.dream.team.indiebook.repository.DislikeRepository;
import com.dream.team.indiebook.service.DislikeService;
import com.dream.team.indiebook.vo.DislikeVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class DislikeServiceImpl implements DislikeService {

    private DislikeRepository dislikeRepository;

    @Autowired
    public void setDislikeRepository(DislikeRepository dislikeRepository) {
        this.dislikeRepository = dislikeRepository;
    }

    @Override
    public List<DislikeVo> getAllByBook(Long bookID) {
        List<Dislike> byBookID = dislikeRepository.findByBookID(bookID);
        return byBookID.stream()
                .map(it -> new DislikeVo(it.getId(), it.getUserID()))
                .collect(Collectors.toList());
    }

    @Override
    public void createDislike(DislikeVo likeVo) {
        Dislike dislike = new Dislike(likeVo.getUserID(), likeVo.getBookID());
        dislikeRepository.save(dislike);
    }

    @Override
    public Integer countByBook(Long bookID) {
        return dislikeRepository.countByBookID(bookID);
    }
}
