/* eslint-disable import/prefer-default-export */
export enum PostFeedTypeeee {
	Normal = 'normal',
	Global = 'global',
}

export enum PostSortBy {
	FIRST_CREATED = 'firstCreated',
	LAST_CREATED = 'lastCreated',
	LAST_UPDATED = 'lastUpdated',
	FIRST_UPDATED = 'firstUpdated',
}

export enum PostFeedType {
	REVIEWING = 'reviewing',
	PUBLISHED = 'published',
}

export enum PostReactions {
	LIKE = 'like',
	LOVE = 'love',
}

export type PostProps = ASC.Post & { onPress: () => void };

export type AddPostType = {
	visible: boolean;
	onClose: () => void;
	onAddPost: () => void;
};

export type AddPostDataType = {
	data: {
		text: string;
		images?: string[];
	};
	targetType: string;
	targetId: string;
};

export type UpdatePostDataType = Patch<ASC.Post, 'data' | 'metadata'>;

export type UploadedPostImageType = ASC.File & { uri: string };
