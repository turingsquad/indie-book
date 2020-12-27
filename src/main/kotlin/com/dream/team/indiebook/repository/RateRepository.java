package com.dream.team.indiebook.repository;

import com.dream.team.indiebook.entity.Rate;
import com.dream.team.indiebook.entity.RateType;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;


@Repository
public interface RateRepository extends CrudRepository<Rate, Long> {
    Optional<Rate> findByUserIdAndBookId(Long userId, Long bookId);

    List<Rate> findByBookIdAndRateType(Long bookId, RateType rateType);

    Integer countByBookIdAndRateType(Long bookId, RateType rateType);
}
