package com.dream.team.indiebook.service.impl;

import com.dream.team.indiebook.entity.Comment;
import com.dream.team.indiebook.repository.CommentRepository;
import com.dream.team.indiebook.service.CommentService;
import com.dream.team.indiebook.vo.CommentVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class CommentServiceImpl implements CommentService {

    private CommentRepository commentRepository;

    @Autowired
    public void setCommentRepository(CommentRepository commentRepository) {
        this.commentRepository = commentRepository;
    }

    @Override
    public List<CommentVo> getAllByChapter(Long chapterId) {
        List<Comment> byChapterId = commentRepository.findByChapterId(chapterId);

        return byChapterId.stream()
                .map(it -> new CommentVo(it.getId(), it.getUserID(), it.getText()))
                .collect(Collectors.toList());
    }

    @Override
    public void createComment(CommentVo commentVo) {
        Comment comment = new Comment(commentVo.getUserId(), commentVo.getChapterId(), commentVo.getText());
        commentRepository.save(comment);
    }

    @Override
    public Integer countCommentsByChapter(Long chapterId) {
        return commentRepository.countByChapterId(chapterId);
    }
}
