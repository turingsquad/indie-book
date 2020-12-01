package com.dream.team.indiebook.service.impl;

import com.dream.team.indiebook.entity.Rate;
import com.dream.team.indiebook.entity.RateType;
import com.dream.team.indiebook.repository.RateRepository;
import com.dream.team.indiebook.service.RateService;
import com.dream.team.indiebook.vo.DislikeVo;
import com.dream.team.indiebook.vo.LikeVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class RateServiceImpl implements RateService {

    private RateRepository rateRepository;

    @Autowired
    public void setRateRepository(RateRepository rateRepository) {
        this.rateRepository = rateRepository;
    }

    @Override
    public List<LikeVo> getAllLikesByBook(Long bookId) {
        List<Rate> byBookIdAndRateType = rateRepository.findByBookIdAndRateType(bookId, RateType.LIKE);
        return byBookIdAndRateType.stream()
                .map(it -> new LikeVo(it.getId(), it.getUserId()))
                .collect(Collectors.toList());
    }

    @Override
    public List<DislikeVo> getAllDislikesByBook(Long bookId) {
        List<Rate> byBookIdAndRateType = rateRepository.findByBookIdAndRateType(bookId, RateType.DISLIKE);
        return byBookIdAndRateType.stream()
                .map(it -> new DislikeVo(it.getId(), it.getUserId()))
                .collect(Collectors.toList());
    }

    @Override
    public void createLike(LikeVo likeVo) {
        Rate rate = new Rate(likeVo.getUserId(), likeVo.getBookId(), RateType.LIKE);
        rateRepository.save(rate);
    }

    @Override
    public void createDislike(DislikeVo dislikeVo) {
        Rate rate = new Rate(dislikeVo.getUserID(), dislikeVo.getBookID(), RateType.DISLIKE);
        rateRepository.save(rate);
    }

    @Override
    public Integer countLikesByBook(Long bookId) {
        return rateRepository.countByBookIdAndRateType(bookId, RateType.LIKE);
    }

    @Override
    public Integer countDislikesByBook(Long bookId) {
        return rateRepository.countByBookIdAndRateType(bookId, RateType.DISLIKE);
    }
}
