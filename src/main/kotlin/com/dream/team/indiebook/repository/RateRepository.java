package com.dream.team.indiebook.repository;

import com.dream.team.indiebook.entity.Rate;
import com.dream.team.indiebook.entity.RateType;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface RateRepository extends CrudRepository<Rate, Long> {
    List<Rate> findByBookIdAndRateType(Long bookID, RateType rateType);
    Integer countByBookIdAndRateType(Long bookID, RateType rateType);
}
