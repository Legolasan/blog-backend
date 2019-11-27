"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const blog_service_1 = require("./blog.service");
const create_post_dto_1 = require("./dto/create-post.dto");
const validate_object_id_pipes_1 = require("./shared/pipes/validate-object-id.pipes");
let BlogController = class BlogController {
    constructor(blogService) {
        this.blogService = blogService;
    }
    async getPosts(res) {
        const posts = await this.blogService.getPosts();
        return res.status(common_1.HttpStatus.OK).json(posts);
    }
    async getPost(res, postID) {
        const post = await this.blogService.getPost(postID);
        if (!post)
            throw new common_1.NotFoundException('Post does not exist!');
        return res.status(common_1.HttpStatus.OK).json(post);
    }
    async addPost(res, createPostDTO) {
        const newPost = await this.blogService.addPost(createPostDTO);
        return res.status(common_1.HttpStatus.OK).json({
            message: "Post has been submitted successfully!",
            post: newPost
        });
    }
    async editPost(res, postID, createPostDTO) {
        const editedPost = await this.blogService.editPost(postID, createPostDTO);
        if (!editedPost)
            throw new common_1.NotFoundException('Post does not exist!');
        return res.status(common_1.HttpStatus.OK).json({
            message: 'Post has been successfully updated',
            post: editedPost
        });
    }
    async deletePost(res, postID) {
        const deletedPost = await this.blogService.deletePost(postID);
        if (!deletedPost)
            throw new common_1.NotFoundException('Post does not exist!');
        return res.status(common_1.HttpStatus.OK).json({
            message: 'Post has been deleted!',
            post: deletedPost
        });
    }
};
__decorate([
    common_1.Get('posts'),
    __param(0, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], BlogController.prototype, "getPosts", null);
__decorate([
    common_1.Get('post/:postID'),
    __param(0, common_1.Res()), __param(1, common_1.Param('postID', new validate_object_id_pipes_1.ValidateObjectId())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], BlogController.prototype, "getPost", null);
__decorate([
    common_1.Post('/post'),
    __param(0, common_1.Res()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_post_dto_1.CreatePostDTO]),
    __metadata("design:returntype", Promise)
], BlogController.prototype, "addPost", null);
__decorate([
    common_1.Put('/edit'),
    __param(0, common_1.Res()),
    __param(1, common_1.Query('postID', new validate_object_id_pipes_1.ValidateObjectId())),
    __param(2, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, create_post_dto_1.CreatePostDTO]),
    __metadata("design:returntype", Promise)
], BlogController.prototype, "editPost", null);
__decorate([
    common_1.Delete('/delete'),
    __param(0, common_1.Res()), __param(1, common_1.Query('postID', new validate_object_id_pipes_1.ValidateObjectId())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], BlogController.prototype, "deletePost", null);
BlogController = __decorate([
    common_1.Controller('blog'),
    __metadata("design:paramtypes", [blog_service_1.BlogService])
], BlogController);
exports.BlogController = BlogController;
//# sourceMappingURL=blog.controller.js.map