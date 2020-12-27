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
    public void setRateRepository(final RateRepository rateRepository) {
        this.rateRepository = rateRepository;
    }

    @Override
    public List<LikeVo> getAllLikesByBook(final Long bookId) {
        final List<Rate> byBookIdAndRateType = rateRepository.findByBookIdAndRateType(bookId, RateType.LIKE);
        return byBookIdAndRateType.stream()
                .map(it -> new LikeVo(it.getId(), it.getUserId(), it.getBookId()))
                .collect(Collectors.toList());
    }

    @Override
    public List<DislikeVo> getAllDislikesByBook(final Long bookId) {
        final List<Rate> byBookIdAndRateType = rateRepository.findByBookIdAndRateType(bookId, RateType.DISLIKE);
        return byBookIdAndRateType.stream()
                .map(it -> new DislikeVo(it.getId(), it.getUserId(), it.getBookId()))
                .collect(Collectors.toList());
    }

    @Override
    public void createLike(final LikeVo likeVo) {
        final Rate rate = new Rate(likeVo.getUserId(), likeVo.getBookId(), RateType.LIKE);
        createRate(rate);
    }

    @Override
    public void createDislike(final DislikeVo dislikeVo) {
        final Rate rate = new Rate(dislikeVo.getUserId(), dislikeVo.getBookId(), RateType.DISLIKE);
        createRate(rate);
    }

    @Override
    public Integer countLikesByBook(final Long bookId) {
        return rateRepository.countByBookIdAndRateType(bookId, RateType.LIKE);
    }

    @Override
    public Integer countDislikesByBook(final Long bookId) {
        return rateRepository.countByBookIdAndRateType(bookId, RateType.DISLIKE);
    }

    @Override
    public RateType userRated(final Long bookId, final Long userId) {
        final var rate = rateRepository.findByUserIdAndBookId(userId, bookId);
        if (rate.isPresent()) {
            return rate.get().getRateType();
        }
        return null;
    }

    private void createRate(final Rate rate) {
        final var previousRate = rateRepository.findByUserIdAndBookId(rate.getUserId(), rate.getBookId());
        if (previousRate.isPresent()) {
            if (previousRate.get().getRateType() == rate.getRateType()) {
                rateRepository.delete(previousRate.get());
                return;
            }
            else {
                rateRepository.delete(previousRate.get());
                rateRepository.save(rate);
                return;
            }
        }
        rateRepository.save(rate);
    }

}
